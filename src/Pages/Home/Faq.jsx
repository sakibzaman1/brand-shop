import faqLogo from '../../assets/Others/faq.png'

const Faq = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-16'>Some Common Questions</h1>
            <div className='lg:flex items-center p-10 lg:p-20 gap-10'>
                <div className='lg:w-1/2'>
                    <img className='w-full h-[300px] lg:h-[600px]' src={faqLogo} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-6'>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                        What sets your brand apart from others in the fashion industry?
                        </div>
                        <div className="collapse-content">
                            <p>We are more than just a fashion destination</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What are your most popular or best-selling products?
                        </div>
                        <div className="collapse-content">
                            <p>You can check through.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        Are your products made from eco-friendly materials?
                        </div>
                        <div className="collapse-content">
                            <p>Yes Sir, Of Course</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        What is your return and exchange policy?
                        </div>
                        <div className="collapse-content">
                            <p>Please Check About Section</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                        How can I stay updated on your latest deals and offers?
                        </div>
                        <div className="collapse-content">
                            <p>Stay Connected Through our Social Media</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;