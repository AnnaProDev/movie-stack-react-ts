/* Синтаксис error is { message: string } означает, что если функция возвращает true, TypeScript будет рассматривать
error как объект с обязательным строковым свойством message. */
export function isErrorWithMessage(error: unknown): error is { status_message: string } {
  return (
    typeof error === 'object' && // Проверяем, что error – это объект
    error != null && // Убеждаемся, что это не null
    'status_message' in error && // Проверяем, что у объекта есть свойство 'status_message'
    typeof (error as Record<string, unknown>).status_message === 'string' // Убеждаемся, что это строка
  )
}