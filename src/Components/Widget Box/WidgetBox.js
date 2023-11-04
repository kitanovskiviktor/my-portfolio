const WidgetBox = ({ data, title }) => {
  return (
    <>
      <div className="wiget-box d-flex gap-5 align-items-center position-relative">
        <div className="flex-fill h-100">
          <h6 className="mb-2">{title}</h6>
          <ul className="mt-4">
            {data.map((item, index) => (
              <>
                <li className="mb-4" key={index}>
                  <p className="text-desc mb-3 size-16">{item.time}</p>
                  <h2 className="size-18 light-blue mb-2">{item.job}</h2>
                  <p className="text-desc size-14">{item.desc}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WidgetBox;
