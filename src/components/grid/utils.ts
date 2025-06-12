type ClassValue = string | number | boolean | undefined | null;
type ClassObject = { [key: string]: boolean | string | undefined | null };
type ClassArray = ClassValue[];

export function classNames(
  ...args: (ClassValue | ClassObject | ClassArray)[]
): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(String(arg));
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
    } else if (typeof arg === "object") {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}
