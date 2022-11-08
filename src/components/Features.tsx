import { ChartBarIcon, CalculatorIcon, CogIcon, CloudIcon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'

const features = [
  {
    name: 'Custom Graphs',
    description: 'Create custom graphs with eaze. Select specific date/time ranges and more!',
    icon: ChartBarIcon,
  },
  {
    name: 'More Metrics',
    description:
      'Be able to view more metrics than other competitors, including throttles and cold starts.',
    icon: CogIcon,
  },
  {
    name: 'Pricing Calculator',
    description:
      'Analyze prices using statistics parsed from AWS Lamda documentation (we basically do what CloudWatch does but better).',
    icon: CalculatorIcon,
  },
  {
    name: 'More Stuff (poop)',
    description:
      'A witch knocks on ur door :^) ... also nice chain',
    icon: CloudIcon,
  },
]


export default function Features() {
  return (
    // <div className="overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to see your metrics.</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#9cb59d] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    // </div>
  )
}