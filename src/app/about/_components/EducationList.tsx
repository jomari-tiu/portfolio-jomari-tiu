import { companies } from "../_data/companies";

type Props = {
  data: (typeof companies)[number];
  last: boolean;
};

const EducationList = ({ data, last }: Props) => {
  return (
    <li className=" flex gap-5 min-h-24">
      <div className="w-4/12 md:w-3/12 flex flex-col items-center">
        <p className=" font-bold">{data.dateRange}</p>

        {data.location && (
          <p className=" text-center text-sm">{data.location}</p>
        )}
        {!last && <div className=" min-h-16 flex-1 bg-secondary w-[2px]"></div>}
      </div>
      <div className="flex-1 pb-5">
        <p className=" font-bold">{data.title}</p>
        {data.content}
        {!last && <hr className=" my-5 bg-secondary" />}
      </div>
    </li>
  );
};

export default EducationList;
