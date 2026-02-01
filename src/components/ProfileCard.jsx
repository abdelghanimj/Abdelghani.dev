export default function ProfileCard() {
  return (
    <div className="text-center">
      <img
        src="https://github.com/abdelghanimj.png"
        className="w-36 h-36 rounded-full mx-auto border-4 border-blue-500 mb-4"
        alt="profile"
      />
      <h1 className="text-3xl font-bold dark:text-white">
        Abdelghani Moujniba
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Développeur Web Full Stack
      </p>
    </div>
  );
}
