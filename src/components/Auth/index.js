import react from 'react';



const Auth = ({formType='login'}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');

    };
    return (

        <div className='m-2'>
            <form onSubmit={handleSubmit}  
            className="flex flex-col justify-center gap-y-1">
                
            {formType ==='signup' && (
            <> {' '}
                <label htmlFor="email">Your Name</label>
                <input type="text"
                    name="name"
                    id="name"
                    className="p-2 border border-gray-500 rounded outline-black placeholder:text-gray-400"
                    placeholder="Your name"
                    value={form.name}
                    required={formType === 'signup'}
                    onChange={handleChange}
                    disabled={loading}
                />
                </>)}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                />

                <label htmlFor="password">Password</label>
                <input
                    typle="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <button
                    type="submit">Submit</button>


            </form>
        </div>
    );
};

export default Auth;