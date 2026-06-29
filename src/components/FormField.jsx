import { useId } from 'react'

export default function FormField({ label, type = 'text', placeholder, rows, ...props }) {
  const id = useId()

  return (
    <div className="flex flex-col gap-base">
      <label htmlFor={id} className="font-label-md text-label-md text-on-surface-variant">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className="input-premium px-sm py-xs rounded-lg font-body-md text-body-md bg-white resize-none"
          placeholder={placeholder}
          rows={rows || 3}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="input-premium px-sm py-xs rounded-lg font-body-md text-body-md bg-white"
          placeholder={placeholder}
          {...props}
        />
      )}
    </div>
  )
}
