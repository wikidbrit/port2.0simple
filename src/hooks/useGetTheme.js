import useLocalStorage from './useLocalStorage';

const useGetTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const handleChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, handleChange };
};
export default useGetTheme;
