export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/b0dff412-7766-4d48-bbf5-b105573a5813/files/a9bdb438-3d90-486d-ad7b-c920a5c1a61c.jpg"
          alt="Дизайн спальни в стиле лайт-дизайн"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему лайт-дизайн — это умно</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Полноценный дизайн-проект за разумные деньги. Планировка, визуализация и спецификации —
          всё что нужно обычной бригаде для качественного ремонта.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
            <span>Готово за 7–14 дней, а не за месяцы</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
            <span>Цена в 2–3 раза ниже классического проекта</span>
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0"></span>
            <span>Понятные чертежи и спецификации материалов</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать проект
        </button>
      </div>
    </div>
  );
}