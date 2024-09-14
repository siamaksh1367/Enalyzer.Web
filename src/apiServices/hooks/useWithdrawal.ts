import { useMutation } from "@tanstack/react-query";
import withdrawalService, { Withdrawal } from "../services/WithdrawalService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useWithdrawal = () => {
  const navigate = useNavigate();

  return useMutation<Withdrawal[], Error, number>({
    mutationFn: withdrawalService.post,

    onSuccess: () => {
      navigate("/result");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export default useWithdrawal;
