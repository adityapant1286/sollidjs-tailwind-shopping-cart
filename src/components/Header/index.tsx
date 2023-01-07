import { Component, createSignal, Show } from "solid-js";
import { cartSize } from "../../state";
import Badge from "../Badge";
import CartItemList from "../CartItemList";
import DarkMode from "../DarkMode";
import SearchField from "../SearchField";

interface Props { }

const Header: Component<Props> = (props: Props) => {

    const [visible, setVisible] = createSignal(false);

    const cartClick = () => setVisible(!visible());

    return (
        <nav class="bg-gray-50 dark:bg-gray-600 sticky top-0 z-10 shadow">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                        <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* left side */}
                        <DarkMode />
                        <div class="mx-auto w-1/3">
                            <SearchField />
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div class="relative ml-3">
                            <div>
                                <button type="button" onClick={cartClick}
                                    class="flex rounded-full bg-slate-50 dark:bg-gray-600 dark:text-slate-50 text-sm p-1 hover:ring-1 hover:ring-offset-2 hover:ring-offset-indigo-500 dark:hover:ring-offset-indigo-400"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open user menu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    <Badge value={10} position="absolute -top-2 -right-4" borderColor="border-white dark:border-gray-600" />
                                </button>
                            </div>
                            <Show when={visible()}>
                                <CartItemList />
                            </Show>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Header;