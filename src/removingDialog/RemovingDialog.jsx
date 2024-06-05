import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./removingDialog.css";

const RemovingDialog = () => {
  const deleteAccount = () => {
    console.log("deleteAccount");
  };
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="button trigger">Delete account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="overlay" />
        <AlertDialog.Content className="content">
          <AlertDialog.Title className="title">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="description">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialog.Description>
          <div className="buttons">
            <AlertDialog.Cancel asChild>
              <button className="button cancel">Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                className="button confirm"
                onClick={() => deleteAccount()}
              >
                Yes, delete account
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default RemovingDialog;
