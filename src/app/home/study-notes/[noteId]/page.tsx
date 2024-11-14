"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

import { useNotes } from "@/features/notes/use-notes";
import { LoadingState } from "./components/loading-state";
import { NoteHeader } from "./components/note-header";
import { NoteContent } from "./components/note-content";
import { NoteMeta } from "./components/note-meta";
import { Id } from "../../../../../convex/_generated/dataModel";

export default function NoteDetailPage() {
  const params = useParams();
  const router = useRouter();
  const noteId: string = params.noteId as string;

  const { useGetNote } = useNotes();
  const { note, isLoading } = useGetNote(noteId as Id<"notes">);

  if (isLoading) {
    return <LoadingState />;
  }

  if (!note) {
    router.push("/home/study-notes");
    toast.error("Note not found");
    return null;
  }

  //   const handleDelete = async () => {
  //     try {
  //       await api.notes.deleteNote({ noteId });
  //       toast.success("Note deleted successfully");
  //       router.push("/home/study-notes");
  //     } catch (error) {
  //       toast.error("Failed to delete note");
  //     }
  //   };

  const handleEdit = () => {
    router.push(`/home/study-notes/${noteId}/edit`);
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <NoteHeader
          noteId={noteId}
          //   onDelete={handleDelete}
          onEdit={handleEdit}
        />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-6"
        >
          <NoteContent title={note.title} content={note.content} />

          <NoteMeta timestamp={note.timestamp} tags={note.tags} />
        </motion.div>

        {/* Paper texture overlay */}
        <div
          className="fixed inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "url('/paper-texture.png')",
            backgroundSize: "cover",
            mixBlendMode: "overlay",
          }}
        />
      </motion.div>
    </div>
  );
}
