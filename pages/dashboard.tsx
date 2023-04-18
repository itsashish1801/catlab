import { TestSectionCard, TestStatsCard } from '@/components/Cards';
import { CompassLogo, ThinkLogo, LanguageLogo } from '../components/Icons';

import pythagoras from '../public/assets/pythagoras.svg';
import socrates from '../public/assets/socrates.svg';
import shakespeare from '../public/assets/shakespeare.svg';

function Dashboard() {
  return (
    <div className='mt-10 mb-24 lg:mb-0'>
      <div>
        <h1 className='text-2xl font-semibold tracking-tight md:text-[1.75rem]'>
          Hi, Ashish
        </h1>
        <p className='mt-0.5 md:text-lg text-slate-600'>
          You have solved a total of{' '}
          <span className='font-semibold text-emerald-500'>100</span> tests till
          now.
        </p>
      </div>

      <div className='flex flex-col gap-6 mt-6 lg:flex-row'>
        <TestStatsCard
          title='Quantitative Aptitude'
          totalTests={10}
          testAttempted={5}
          Icon={CompassLogo}
        />
        <TestStatsCard
          title='Logical Reasoning & Data Interpretation'
          totalTests={10}
          testAttempted={5}
          Icon={ThinkLogo}
        />
        <TestStatsCard
          title='Verbal Ability & Reading Comprehension'
          totalTests={10}
          testAttempted={5}
          Icon={LanguageLogo}
        />
      </div>

      <div className='mt-24'>
        <h2 className='text-xl font-semibold'>
          Keep this flow going. Attempt some more tests:
        </h2>

        <div className='flex flex-col mt-6 gap-y-8 gap-x-12 md:flex-row'>
          <TestSectionCard
            image={pythagoras}
            imageAlt='Illustration of Pyhtagoras holding a compass'
            title='Quantitative Aptitude'
            contentCount={7}
            href='/qa'
          />
          <TestSectionCard
            image={socrates}
            imageAlt='Illustration of Socrates thinking something'
            title='Logical Reasoning & Data Interpretation'
            contentCount={7}
            href='/lrdi'
          />
          <TestSectionCard
            image={shakespeare}
            imageAlt='Illustration of Shakespeare writing something in a book'
            title='Verbal Ability & Reading Comprehension'
            contentCount={7}
            href='/varc'
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
