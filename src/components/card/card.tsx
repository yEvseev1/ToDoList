import './index.css'

export default function Card({children, isComplete}: { children: React.ReactNode, isComplete?: boolean }) {
  return <div className={isComplete ? 'complete' : 'notComplete'}>
    <div className='content w-full flex justify-start items-center px-4 gap-4 text-wrap'>
      {children}
    </div>
  </div>
}