export const handleRefresh = (setRefreshing: (val: boolean) => void, refetch: () => void) => {
    try {
      setRefreshing(true);
      refetch();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
      setRefreshing(false);
    }
  };