export default function DropZone({ icon = 'add', label, heightClass = 'h-20' }) {
  return (
    <div
      className={`drop-zone ${heightClass} rounded-lg flex items-center justify-center cursor-pointer group`}
    >
      {icon === 'upload_file' && (
        <div className="flex flex-col items-center gap-xs">
          <span className="material-symbols-outlined text-outline group-hover:text-primary mb-xs">
            {icon}
          </span>
          <p className="font-label-md text-on-surface-variant">{label}</p>
        </div>
      )}
      {icon === 'add' && (
        <span className="material-symbols-outlined text-outline-variant">{icon}</span>
      )}
    </div>
  )
}
