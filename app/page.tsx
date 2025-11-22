import Card from "@/components/card";

const mockPages = [
  { id: "1", label: "Page 1" },
  { id: "2", label: "Page 2" },
  { id: "3", label: "Page 3" },
  { id: "4", label: "Page 4" },
];

export default function page() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card pages={mockPages} />
    </div>
  );
}
