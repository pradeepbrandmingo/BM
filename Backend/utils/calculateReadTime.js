const calculateReadTime = (content) => {
  const wordsPerMinute = 200;

  const text = content.replace(/<[^>]+>/g, "");

  const words = text.split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
};

export default calculateReadTime;
