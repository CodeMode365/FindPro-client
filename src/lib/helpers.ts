import toast from "react-hot-toast";

export const generatePathname = (name: string, isUrl = true) => {
  const path = name.split(" ").join("-").toLocaleLowerCase();
  return isUrl ? encodeURI(path) : path;
};

export const toastGenerator = (
  toastType: "loading" | "error" | "success",
  message: string = "Please wait!"
) => {
  toast.remove();
  switch (toastType) {
    case "loading":
      toast.loading(message);
      return;
    case "success":
      toast.success(message);
      return;
    case "error":
      toast.error(message);
      return;
  }
};
