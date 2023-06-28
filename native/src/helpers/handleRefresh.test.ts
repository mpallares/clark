import { handleRefresh } from './handleRefresh';


describe('handleRefresh functionality', () => {
    test('should set refreshing to true, call refetch, and set refreshing to false', () => {
      const setRefreshingMock = jest.fn();
      const refetchMock = jest.fn();

      handleRefresh(setRefreshingMock, refetchMock);

      expect(setRefreshingMock).toHaveBeenCalledTimes(2);
      expect(setRefreshingMock).toHaveBeenNthCalledWith(1, true);
      expect(setRefreshingMock).toHaveBeenNthCalledWith(2, false);
      expect(refetchMock).toHaveBeenCalledTimes(1);
    });
  
    test('should set refreshing to false and log the error when an exception occurs', () => {
      const setRefreshingMock = jest.fn();
      const refetchMock = jest.fn(() => {
        throw new Error('Mocked error');
      });

      const consoleErrorSpy = jest.spyOn(console, 'error');
      consoleErrorSpy.mockImplementation(() => {});
  
      handleRefresh(setRefreshingMock, refetchMock);
  
      expect(setRefreshingMock).toHaveBeenCalledTimes(2);
      expect(setRefreshingMock).toHaveBeenNthCalledWith(1, true);
      expect(setRefreshingMock).toHaveBeenNthCalledWith(2, false);
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(new Error('Mocked error'));

      consoleErrorSpy.mockRestore();
    });
  });