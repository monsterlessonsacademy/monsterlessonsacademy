export type Comment = {
  _id: string;
  parentId: string | null;
  userId: string;
  text: string;
  createdAt?: Date;
};

export type CommentWithoutID = Omit<Comment, "_id">;
