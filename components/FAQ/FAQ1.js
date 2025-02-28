import Link from "next/link"

const faqs = [
    {
        id: 1,
        question: "What services does Encuentro Church offer?",
        answer: "We offer worship services, Bible studies, community outreach programs, discipleship opportunities, and fellowship events to help individuals grow in faith.",
    },
    {
        id: 2,
        question: "How can I get involved in the church?",
        answer: "You can join a small group, volunteer in a ministry, participate in outreach programs, or attend our services and events to connect with our faith community.",
    },
    {
        id: 3,
        question: "Do you offer support for individuals and families?",
        answer: "Yes, we provide spiritual guidance, pastoral counseling, and community support to help individuals and families navigate life's challenges with faith and encouragement.",
    },
    {
        id: 4,
        question: "Is Encuentro Church open to everyone?",
        answer: "Absolutely! We welcome people from all backgrounds to join us in worship, fellowship, and service as we grow together in faith.",
    }
]


export default function Example() {
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
                Can’t find the answer you’re looking for? Reach out to our team by{' '}
                <Link href="/contact" className="font-semibold text-indigo-600 hover:text-indigo-500">
                sending us an email
                </Link>{' '}
                and we’ll be happy to assist you.
            </p>
            </div>
            <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
                {faqs.map((faq) => (
                <div key={faq.id}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
    )
}
