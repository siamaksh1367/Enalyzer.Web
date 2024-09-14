import { useMutation } from "@tanstack/react-query";
import withdrawalService, { Withdrawal } from "../services/WithdrawalService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface WithdrawalQuery {
  amount: number;
}
const useWithdrawal = () => {
  const navigate = useNavigate();

  return useMutation<Withdrawal[], Error, WithdrawalQuery>({
    mutationFn: withdrawalService.post,

    onSuccess: (data) => {
      navigate("/result", { state: data });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export default useWithdrawal;
