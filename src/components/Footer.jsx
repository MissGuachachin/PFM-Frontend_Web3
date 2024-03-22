export default function Footer() {
    return (
        <footer className="border-t py-4 flex justify-center text-2xl bg-gray-300">
            <p>Derecho de autor &copy; {new Date().getFullYear()} BlockMaker Academy</p>
        </footer>
    )
}