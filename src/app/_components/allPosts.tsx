"use client";
import { api } from "~/trpc/react";

export const AllPosts: React.FC = () => {
    const { data: latestPosts } = api.post.getAll.useQuery();
    return (
        <div>
            {latestPosts && latestPosts.length > 0 ? (
                latestPosts.map(post => (
                    <p key={post.id}>
                        {post.id} -
                        <span> {post.name}</span>
                    </p>
                ))
            ) : (
                <p>You have no posts yet.</p>
            )}
        </div>
    );
}