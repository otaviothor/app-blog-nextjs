import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface IProps {
  dateString: string;
}

const DateFormatter = ({ dateString }: IProps) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "dd 'de' LLLL 'de' yyyy", {
        locale: ptBR,
      })}
    </time>
  );
};

export default DateFormatter;
