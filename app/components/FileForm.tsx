import { Transition } from '@remix-run/react/transition';
import { Form } from 'remix';

export default function FileForm({
  errors,
  transition,
  post,
}: {
  errors: any;
  transition: Transition;
  post?: any;
}): JSX.Element {
  const { title, slug, html } = post || {};

  return (
    <Form method="post">
      <p>
        <label htmlFor="title">
          Post Title: {errors?.title ? <em>Title is required</em> : null}
        </label>
        <br />
        <input type="text" name="title" defaultValue={title} />
      </p>
      <p>
        <label htmlFor="slug">
          Post Slug: {errors?.slug ? <em>Slug is required</em> : null}
        </label>
        <br />
        <input type="text" name="slug" defaultValue={slug} />
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>{' '}
        {errors?.markdown ? <em>Markdown is required</em> : null}
        <br />
        <textarea id="markdown" rows={20} name="markdown" defaultValue={html} />
      </p>
      <p>
        <button type="submit">
          {transition.submission ? 'Creating...' : 'Create Post'}
        </button>
      </p>
    </Form>
  );
}
