import Modal from "./ui/Modal";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";
import { categories, billingCycles } from "../data/mockData";

export default function AddSubscriptionModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Subscription">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <Input
          label="Name"
          id="name"
          name="name"
          placeholder="e.g. Netflix, Spotify"
        />

        <Input
          label="Price"
          id="price"
          name="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="0.00"
        />

        <div className="grid grid-cols-2 gap-4">
          <Select label="Billing cycle" id="billingCycle" name="billingCycle" defaultValue="Monthly">
            {billingCycles.map((cycle) => (
              <option key={cycle} value={cycle}>
                {cycle}
              </option>
            ))}
          </Select>

          <Select label="Category" id="category" name="category" defaultValue="Entertainment">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Select>
        </div>

        <Input label="Next billing date" id="nextBillingDate" name="nextBillingDate" type="date" />

        <div className="flex gap-3 pt-2">
          <Button type="button" variant="secondary" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" className="flex-1">
            Add Subscription
          </Button>
        </div>
      </form>
    </Modal>
  );
}
