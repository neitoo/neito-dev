import error from '@images/coding-apps-websites-404-error.svg'

const NotFound = () => {
    return (
        <main className="!p-0 main__container ">
            <div className='fixed top-0 left-0 w-full h-full opacity-30 z-40 bg-error'></div>
            <section className="content__container p-0 h-screen justify-center">
                <img src={error} className='pointer-events-none cursor-default select-none w-1/3 z-50 opacity-80'/>
            </section>
        </main>
    );
}

export default NotFound;