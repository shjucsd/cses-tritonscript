import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    note_id: {
      type: String,
      required: true,
      unique: true,
    },
    classTitle: {
      type: String,
      required: true,
      unique: false,
    },
    classQtr: {
      type: String,
      required: true,
      unique: false,
    },
    classYr: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
    instructor: {
      type: String,
      required: false,
      unique: false,
    },
    isPublic: {
      type: Boolean,
      required: false,
      unique: false,
    },
    uploader: {
      type: String,
      required: false,
      unique: false,
    },
    file_id: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
