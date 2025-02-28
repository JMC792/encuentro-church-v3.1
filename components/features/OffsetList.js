import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Faith-Based Leadership',
        description: 'Providing spiritual guidance and mentorship to help individuals and families grow in their faith.',
    },
    {
        name: 'Biblical Teaching',
        description: 'Offering sound biblical instruction to strengthen understanding and application of God’s Word.',
    },
    {
        name: 'Community Outreach',
        description: 'Engaging in service projects and outreach programs to support and uplift our community.',
    },
    {
        name: 'Prayer and Worship',
        description: 'Creating a space for heartfelt worship and prayer, where individuals can connect deeply with God.',
    },
    {
        name: 'Discipleship and Fellowship',
        description: 'Fostering meaningful relationships through small groups, mentorship, and discipleship programs.',
    },
    {
        name: 'Ministry Development',
        description: 'Equipping members with the resources and support needed to serve effectively in various ministry areas.',
    },
]


export default function Example(props) {
    return (
    <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    Empowering Your Faith Journey
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Guidance, Community, and Spiritual Growth
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                At Encuentro Church, we are dedicated to walking alongside you in your spiritual journey. Through faith-centered teaching, meaningful fellowship, and compassionate service, we provide the guidance and support needed to grow in your relationship with God. Trust us to equip and encourage you as you navigate life with faith and purpose.
                </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                    <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                    {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
                </div>
            ))}
            </dl>
        </div>
        </div>
    </div>
    )
}
