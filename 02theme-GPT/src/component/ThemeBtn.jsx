import useTheme from "../Context/Theme";

export default function ThemeBtn() {
  const { themeMode, darkMode, lightMode } = useTheme();

  const toggle = () => {
    themeMode === "light" ? darkMode() : lightMode();
  };

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
    >
      {themeMode === "light" ? "Dark" : "Light"}
    </button>
  );
}