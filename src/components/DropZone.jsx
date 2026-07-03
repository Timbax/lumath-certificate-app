import { useState, useRef } from 'react'

export default function DropZone({ icon = 'add', label, heightClass = 'h-20', onFileSelect, accept = 'image/*' }) {
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  function handleFile(file) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      setPreview(e.target.result)
      onFileSelect?.(e.target.result)
    }
    reader.readAsDataURL(file)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  function handleDrop(e) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  function handleClick() {
    inputRef.current?.click()
  }

  function handleInputChange(e) {
    const file = e.target.files[0]
    handleFile(file)
  }

  function handleRemove(e) {
    e.stopPropagation()
    setPreview(null)
    onFileSelect?.(null)
  }

  return (
    <div
      className={`${heightClass} rounded-lg flex items-center justify-center cursor-pointer group relative overflow-hidden border-2 border-dashed border-outline-variant/30 hover:border-primary/50 transition-colors bg-surface-container-lowest`}
      onClick={preview ? undefined : handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleInputChange}
      />
      {preview ? (
        <>
          <img src={preview} className="max-h-full max-w-full object-contain p-xs" alt="Preview" />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full text-[12px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
          >
            ×
          </button>
        </>
      ) : (
        icon === 'upload_file' ? (
          <div className="flex flex-col items-center gap-xs" onClick={handleClick}>
            <span className="material-symbols-outlined text-outline group-hover:text-primary mb-xs">{icon}</span>
            <p className="font-label-md text-on-surface-variant text-center text-[10px] px-xs">{label}</p>
          </div>
        ) : (
          <span className="material-symbols-outlined text-outline-variant" onClick={handleClick}>{icon}</span>
        )
      )}
    </div>
  )
}
