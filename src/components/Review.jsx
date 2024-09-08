import React from 'react';

// Sample data for reviews
const reviews = [
    {
        id: 100,
        name: 'Jane Doe',
        review: 'This is an amazing project! The attention to detail and the functionality are top-notch.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi8ItLAnC5nIxJcL4MLR9hb_YVzf2Vxa8hg&s'
    },
    {
        id: 101,
        name: 'John Smith',
        review: 'I was thoroughly impressed by the quality and usability. Great job!',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSi8ItLAnC5nIxJcL4MLR9hb_YVzf2Vxa8hg&s'
    },
    // Add more reviews as needed
];

const ReviewCard = ({ name, review, img }) => {
    return (
        <div className="bg-gray-800 text-white rounded-lg shadow-lg flex flex-col sm:flex-row p-4 space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <img
                src={img}
                alt={name}
                className="w-20 h-20 rounded-full object-cover mb-4 sm:mb-0"
            />
            <div className="flex-1">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-400 mt-2">{review}</p>
            </div>
        </div>
    );
};

const Review = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Reviews</h1>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        name={review.name}
                        review={review.review}
                        img={review.img}
                    />
                ))}
            </div>
        </div>
    );
};

export default Review;
