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

       
        <select value={post.seen} 
        onChange={(e) => setPost({ ...post, seen: e.target.value })}>
                        <option value="Nature">Nature</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Ocean">Ocean</option>
                        <option value="Wildlife">Wildlife</option>
                        <option value="Forest">Forest</option>
                    </select>
    

        <div>
        <span className='font-satoshi font-semibold text-base text-gray-700'>
         date
          </span>
          <div>
          <input type="date" 
          name="date"
           value={post.date}
           onChange={(e) => setPost({ ...post, date: e.target.value })}
           
           placeholder='Meal overview'
           required
           className='form_input'/>
          </div>
         
        </div>
    
      <div>
      <span className='font-satoshi font-semibold text-base text-gray-700'>
        gender
          </span>
      <div className="form-check">
      <input
          type="radio"
          name="gender"
          value="male"
          checked={post.gender === 'male'}
          onChange={(e) => setPost({ ...post, gender: e.target.value })}
        />
        <label htmlFor="radioDefault" className="inline-block tet-gray-800">
          male
        </label>
      </div>
      <div className="form-check">
        {/* <input type="radio" name="gender" value={post.gender} onChange={(e) => setPost({ ...post, gender: e.target.value })}/> */}
        <input
          type="radio"
          name="gender"
          value="female"
          checked={post.gender === 'female'}
          onChange={(e) => setPost({ ...post, gender: e.target.value })}
        />
        <label htmlFor="radioDefault" className="inline-block tet-gray-800">
          female
        </label>
      </div>
      </div>
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