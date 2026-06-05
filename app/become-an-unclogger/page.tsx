import { redirect } from "next/navigation";

// This page is not used by JP Volt Electric — redirecting to contact
export default function BecomeAnUncloggerPage() {
  redirect("/contact-us");
}
