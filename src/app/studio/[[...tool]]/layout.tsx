export const metadata = {
  title: 'LvSG Studio',
  description: 'Content management for Longview Solutions Group',
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
