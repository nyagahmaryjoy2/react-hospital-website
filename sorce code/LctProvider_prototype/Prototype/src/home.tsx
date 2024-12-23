import Sidebar from './Sidebar';


const Home = ()=>{
    

    return(
        <>
            <section className='flex gap-6'>
                <Sidebar/>
                <div className='m-3 text-x1 text-black font font-semibold'>HEALTH CARE CENTER </div>
            </section>
        </>
    );
};

export default Home;