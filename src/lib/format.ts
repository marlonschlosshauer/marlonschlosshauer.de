export const trail = (text: string, length: number = 120) => {
  if (text.length < length) {
    return text;
  }

  return (
    text
      .split(" ")
      .reduce((acc, next) => {
        if (acc.length + next.length > length) {
          return acc;
        }

        return acc + " " + next;
      }, "")
      .trim() + "..."
  );
};
