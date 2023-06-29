import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Meal</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} Your Favorite Meal Type
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Meal Type
          </span>
          <input
            value={post.type}
            onChange={(e) => setPost({ ...post, type: e.target.value })}
            type='text'
            placeholder='Meal Type'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Meal Plan
          </span>
          <input
            value={post.plan}
            onChange={(e) => setPost({ ...post, plan: e.target.value })}
            type='text'
            placeholder=' Meal Plan'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Meal Ingredients
          </span>
          <input
            value={post.ingredients}
            onChange={(e) => setPost({ ...post, ingredients: e.target.value })}
            type='text'
            placeholder='Meal ingredients'
            required
            className='form_input'
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
          Meal Overview
          </span>
          <input
            value={post.overview}
            onChange={(e) => setPost({ ...post, overview: e.target.value })}
            type='text'
            placeholder='Meal overview'
            required
            className='form_input'
          />
        </label>


        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;