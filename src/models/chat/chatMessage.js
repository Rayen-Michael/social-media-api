import mongoose from "mongoose";

const chatMessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },

    mediaFiles: [
        {
            public_id: String,
            url: String,
            thumbnail: {
                public_id: String,
                url: String,
            },
            mediaType: {
                type: String,
                enum: [
                    "image", "video", "audio",
                    "sticker", "file", "gif",
                    "location"
                ],
                default: "image",
            },
        }
    ],

    type: {
        type: String,
        enum: ["text", "image", "video", "audio"],
        default: "text",
        required: true,
    },

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    sent: {
        type: Boolean,
        default: true,
    },

    sentAt: {
        type: Date,
        default: Date.now,
    },

    delivered: {
        type: Boolean,
        default: false,
    },

    deliveredAt: {
        type: Date,
    },

    seen: {
        type: Boolean,
        default: false,
    },

    seenAt: {
        type: Date,
    },

    deleted: {
        type: Boolean,
        default: false,
    },

    deletedAt: {
        type: Date,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

chatMessageSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const ChatMessage = mongoose.model("ChatMessage", chatMessageSchema);

export default ChatMessage;
