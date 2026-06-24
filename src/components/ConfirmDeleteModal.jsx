import Modal from "./ui/Modal";
import Button from "./ui/Button";

export default function ConfirmDeleteModal({
  isOpen,
  subscriptionName,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} title="Delete Subscription">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Are you sure you want to delete{" "}
        <span className="font-medium text-slate-900 dark:text-white">
          {subscriptionName}
        </span>
        ? This action cannot be undone.
      </p>
      <div className="mt-6 flex gap-3">
        <Button type="button" variant="secondary" className="flex-1" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="button"
          variant="primary"
          className="flex-1 !bg-red-600 hover:!bg-red-700 shadow-red-600/20"
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}
