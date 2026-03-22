import type { FormContent } from '../../../types'

export function FormPreview({ form }: { form: FormContent }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-medium">
          Form
        </span>
      </div>

      <div className="rounded-xl border border-zinc-700 bg-white overflow-hidden shadow-xl max-w-[420px] mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-5">
          <h2 className="text-lg font-bold text-white">{form.title}</h2>
          {form.description && (
            <p className="text-xs text-gray-300 mt-1">{form.description}</p>
          )}
        </div>

        {/* Form fields */}
        <div className="px-6 py-5 space-y-4">
          {form.fields.map((field, i) => (
            <div key={i}>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {field.label}
                {field.required && <span className="text-red-500 ml-0.5">*</span>}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  placeholder={`Enter ${field.label.toLowerCase()}...`}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 bg-gray-50 resize-none h-20"
                  readOnly
                />
              ) : field.type === 'select' ? (
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 bg-gray-50">
                  <option>Select {field.label.toLowerCase()}</option>
                  {field.options?.map((opt, j) => (
                    <option key={j}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  placeholder={`Enter ${field.label.toLowerCase()}...`}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-500 bg-gray-50"
                  readOnly
                />
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="px-6 pb-6">
          <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg text-sm shadow-md">
            {form.submitLabel}
          </button>
        </div>

        {/* Success preview */}
        {form.successMessage && (
          <div className="border-t border-dashed border-gray-200 px-6 py-4 bg-green-50">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span className="text-xs text-green-700">{form.successMessage}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
