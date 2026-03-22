-- Products
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  brand_config jsonb default '{}',
  icon text,
  created_at timestamptz default now()
);

-- Boards
create table boards (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  type text not null check (type in ('journey', 'funnel')),
  name text not null,
  viewport_state jsonb default '{}',
  created_at timestamptz default now()
);

-- Nodes
create table nodes (
  id uuid primary key default gen_random_uuid(),
  board_id uuid references boards(id) on delete cascade,
  type text not null,
  position_x float not null default 0,
  position_y float not null default 0,
  data_json jsonb default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Edges
create table edges (
  id uuid primary key default gen_random_uuid(),
  board_id uuid references boards(id) on delete cascade,
  source_node uuid references nodes(id) on delete cascade,
  target_node uuid references nodes(id) on delete cascade,
  source_handle text,
  target_handle text,
  label text,
  style jsonb default '{}',
  created_at timestamptz default now()
);

-- Assets
create table assets (
  id uuid primary key default gen_random_uuid(),
  node_id uuid references nodes(id) on delete cascade,
  type text not null check (type in ('page', 'email', 'ad', 'whatsapp', 'form')),
  url text,
  screenshot_url text,
  stitch_project_id text,
  stitch_screen_id text,
  created_at timestamptz default now()
);

-- Product Members (access control)
create table product_members (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null default 'viewer' check (role in ('admin', 'editor', 'viewer')),
  created_at timestamptz default now(),
  unique(product_id, user_id)
);

-- RLS
alter table products enable row level security;
alter table boards enable row level security;
alter table nodes enable row level security;
alter table edges enable row level security;
alter table assets enable row level security;
alter table product_members enable row level security;

-- Admin sees all
create policy "admin_all_products" on products for all
  using (auth.jwt() ->> 'email' = 'k@kanielt.com');

create policy "admin_all_boards" on boards for all
  using (exists (
    select 1 from products where products.id = boards.product_id
    and auth.jwt() ->> 'email' = 'k@kanielt.com'
  ));

create policy "admin_all_nodes" on nodes for all
  using (exists (
    select 1 from boards b
    join products p on p.id = b.product_id
    where b.id = nodes.board_id
    and auth.jwt() ->> 'email' = 'k@kanielt.com'
  ));

create policy "admin_all_edges" on edges for all
  using (exists (
    select 1 from boards b
    join products p on p.id = b.product_id
    where b.id = edges.board_id
    and auth.jwt() ->> 'email' = 'k@kanielt.com'
  ));

create policy "admin_all_assets" on assets for all
  using (exists (
    select 1 from nodes n
    join boards b on b.id = n.board_id
    join products p on p.id = b.product_id
    where n.id = assets.node_id
    and auth.jwt() ->> 'email' = 'k@kanielt.com'
  ));

create policy "admin_all_members" on product_members for all
  using (auth.jwt() ->> 'email' = 'k@kanielt.com');

-- Members see their products
create policy "members_select_products" on products for select
  using (exists (
    select 1 from product_members
    where product_members.product_id = products.id
    and product_members.user_id = auth.uid()
  ));

create policy "members_select_boards" on boards for select
  using (exists (
    select 1 from product_members pm
    where pm.product_id = boards.product_id
    and pm.user_id = auth.uid()
  ));

create policy "members_select_nodes" on nodes for select
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = nodes.board_id and pm.user_id = auth.uid()
  ));

create policy "members_select_edges" on edges for select
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = edges.board_id and pm.user_id = auth.uid()
  ));

create policy "members_select_assets" on assets for select
  using (exists (
    select 1 from nodes n
    join boards b on b.id = n.board_id
    join product_members pm on pm.product_id = b.product_id
    where n.id = assets.node_id and pm.user_id = auth.uid()
  ));

-- Editors can modify
create policy "editors_modify_nodes" on nodes for all
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = nodes.board_id
    and pm.user_id = auth.uid()
    and pm.role in ('admin', 'editor')
  ));

create policy "editors_modify_edges" on edges for all
  using (exists (
    select 1 from boards b
    join product_members pm on pm.product_id = b.product_id
    where b.id = edges.board_id
    and pm.user_id = auth.uid()
    and pm.role in ('admin', 'editor')
  ));
