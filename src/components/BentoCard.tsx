interface BentoCardProps {
    src: string;
    title: React.ReactNode;
    description?: string;
}

const BentoCard = (props: BentoCardProps) => {
  return (
    <div className="relative size-full">
        <video src={props.src} loop muted autoPlay className="absolute left-0 top-0 size-full object-cover object-center" />
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
            <div>
                <h1 className="bento-title special-font">{props.title}</h1>
                {props.description && <p className="mt-3 max-w-64 text-xs md:text-base">{props.description}</p>}
            </div>
        </div>
    </div>
  )
}

export default BentoCard