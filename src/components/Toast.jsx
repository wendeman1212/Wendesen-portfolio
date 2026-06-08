const Toast = ({ toast }) => {
  if (!toast.show) return null

  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 px-7 py-3 rounded-full z-[2000] transition-opacity duration-200 pointer-events-none font-medium text-center max-w-[90%]"
      style={{
        backgroundColor: toast.isError ? '#b91c1c' : '#1e293b',
        color: 'white',
        opacity: toast.show ? '1' : '0',
      }}
    >
      {toast.message}
    </div>
  )
}

export default Toast
