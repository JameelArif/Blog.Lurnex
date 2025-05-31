import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  publishedAt,
  mainImage,
  body,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title
}`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);

  const mainImageUrl = post.mainImage
    ? urlFor(post.mainImage)?.width(1200).height(600).url()
    : null;
  const authorImageUrl = post.authorImage
    ? urlFor(post.authorImage)?.width(60).height(60).url()
    : null;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Blog</Link> /{" "}
        <span className="text-black">{post.title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      {/* Author & Date */}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
        {authorImageUrl && (
          <img
            src={authorImageUrl}
            alt={post.authorName}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p>By {post.authorName}</p>
          <p>
            Published on{" "}
            {new Date(post.publishedAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Main Image */}
      {mainImageUrl && (
        <img
          src={mainImageUrl}
          alt={post.title}
          className="w-full h-auto rounded-xl shadow mb-6"
        />
      )}

      {/* Article Body */}
      <article className="prose lg:prose-lg max-w-none prose-neutral">
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </article>

      {/* Reactions */}
      <div className="flex gap-6 mt-10 text-gray-600 border-t pt-6">
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          ❤️ <span>120</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          💬 <span>45</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          📤 <span>Share</span>
        </div>
      </div>

      {/* Comments */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>

        {/* Example Comment */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Ethan"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Ethan Carter <span className="text-sm text-gray-400 ml-2">2 days ago</span></p>
              <p>This is a very insightful article. The points about AI and personalized treatment are particularly interesting.</p>
              <div className="flex gap-3 mt-1 text-sm text-gray-500">
                👍 23 <span>👎 2</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="https://randomuser.me/api/portraits/women/45.jpg"
              alt="Sophia"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Sophia Bennett <span className="text-sm text-gray-400 ml-2">3 days ago</span></p>
              <p>Thank you for shedding light on the challenges. It's important to ensure these advancements are implemented responsibly.</p>
              <div className="flex gap-3 mt-1 text-sm text-gray-500">
                👍 15 <span>👎 1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts (Static Placeholder) */}
      <section className="mt-16 border-t pt-10">
        <h2 className="text-xl font-semibold mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <img src="/img/social-mental-health.png" alt="" className="w-24 h-24 rounded object-cover" />
            <div>
              <p className="text-sm text-gray-500">Mental Health</p>
              <h3 className="font-semibold text-base">
                The Impact of Social Media on Teen Mental Health
              </h3>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/img/therapy-types.png" alt="" className="w-24 h-24 rounded object-cover" />
            <div>
              <p className="text-sm text-gray-500">Therapy</p>
              <h3 className="font-semibold text-base">
                Understanding Different Types of Therapy: Which One Is Right for You?
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 border-t pt-6">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <p className="text-xs">&copy;2024 Insanity in next years. All rights reserved.</p>
      </footer>
    </main>
  );
}
