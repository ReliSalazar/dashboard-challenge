function Notification({content}) {
  return (
    <span className="counter bg-red-600 h-5 w-5 rounded-full text-xs text-stone-100 flex items-center justify-center">
        {content}
    </span>
  );
}

export default Notification;
