--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: inventar_manager; Type: DATABASE; Schema: -; Owner: dominikpalatin
--

CREATE DATABASE inventar_manager WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';


ALTER DATABASE inventar_manager OWNER TO dominikpalatin;

\connect inventar_manager

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: products; Type: TABLE; Schema: public; Owner: dominikpalatin
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    image character varying(100) NOT NULL,
    space_id integer,
    count integer NOT NULL,
    barcode character varying(50) NOT NULL
);


ALTER TABLE public.products OWNER TO dominikpalatin;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: dominikpalatin
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO dominikpalatin;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dominikpalatin
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: spaces; Type: TABLE; Schema: public; Owner: dominikpalatin
--

CREATE TABLE public.spaces (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    description text NOT NULL,
    image character varying(100) NOT NULL
);


ALTER TABLE public.spaces OWNER TO dominikpalatin;

--
-- Name: spaces_id_seq; Type: SEQUENCE; Schema: public; Owner: dominikpalatin
--

CREATE SEQUENCE public.spaces_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spaces_id_seq OWNER TO dominikpalatin;

--
-- Name: spaces_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dominikpalatin
--

ALTER SEQUENCE public.spaces_id_seq OWNED BY public.spaces.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: dominikpalatin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(100) NOT NULL,
    first character varying(50) NOT NULL,
    last character varying(50) NOT NULL,
    password character varying(200) NOT NULL
);


ALTER TABLE public.users OWNER TO dominikpalatin;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: dominikpalatin
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO dominikpalatin;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dominikpalatin
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users_spaces; Type: TABLE; Schema: public; Owner: dominikpalatin
--

CREATE TABLE public.users_spaces (
    user_id integer NOT NULL,
    space_id integer NOT NULL,
    admin boolean DEFAULT false NOT NULL
);


ALTER TABLE public.users_spaces OWNER TO dominikpalatin;

--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: spaces id; Type: DEFAULT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.spaces ALTER COLUMN id SET DEFAULT nextval('public.spaces_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dominikpalatin
--

INSERT INTO public.products VALUES (1, 'Panasonic GH4', 'Video-Kamera', 'gh4.jpg', 1, 2, 'a');
INSERT INTO public.products VALUES (3, 'Essen', 'Essen vom Spar.', 'essen.jpg', 2, 3, 'c');
INSERT INTO public.products VALUES (4, 'Trinken', 'Essen vom Spar.', 'trinken.jpg', 2, 2, 'd');
INSERT INTO public.products VALUES (2, 'Panasonic GH5', 'Video-Kamera', 'gh5.jpg', 1, 1, 'b');


--
-- Data for Name: spaces; Type: TABLE DATA; Schema: public; Owner: dominikpalatin
--

INSERT INTO public.spaces VALUES (1, 'Video-Labor', 'Das Video-Labor der HTL WW.', 'videolabor.jpg');
INSERT INTO public.spaces VALUES (2, 'Warenkorb', 'Der Warenkorb von Dominik Palatin und Sebastian Lang.', 'warenkorb.jpg');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dominikpalatin
--

INSERT INTO public.users VALUES (1, 'palatin.d02@htlwienwest.at', 'Dominik', 'Palatin', 'dp');
INSERT INTO public.users VALUES (2, 'lang.s03@htlwienwest.at', 'Sebastian', 'Lang', 'sl');
INSERT INTO public.users VALUES (3, 'richard.wurzer@htlwienwest.at', 'Richard', 'Wurzer', 'rw');


--
-- Data for Name: users_spaces; Type: TABLE DATA; Schema: public; Owner: dominikpalatin
--

INSERT INTO public.users_spaces VALUES (1, 2, true);
INSERT INTO public.users_spaces VALUES (2, 2, false);
INSERT INTO public.users_spaces VALUES (3, 1, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dominikpalatin
--

SELECT pg_catalog.setval('public.products_id_seq', 4, true);


--
-- Name: spaces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dominikpalatin
--

SELECT pg_catalog.setval('public.spaces_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dominikpalatin
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: products products_pk; Type: CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pk PRIMARY KEY (id);


--
-- Name: spaces spaces_pk; Type: CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.spaces
    ADD CONSTRAINT spaces_pk PRIMARY KEY (id);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- Name: products_barcode_uindex; Type: INDEX; Schema: public; Owner: dominikpalatin
--

CREATE UNIQUE INDEX products_barcode_uindex ON public.products USING btree (barcode);


--
-- Name: users_email_uindex; Type: INDEX; Schema: public; Owner: dominikpalatin
--

CREATE UNIQUE INDEX users_email_uindex ON public.users USING btree (email);


--
-- Name: products products_spaces_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_spaces_id_fk FOREIGN KEY (space_id) REFERENCES public.spaces(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: spaces spaces_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.spaces
    ADD CONSTRAINT spaces_users_id_fk FOREIGN KEY (id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_spaces users_spaces_spaces_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.users_spaces
    ADD CONSTRAINT users_spaces_spaces_id_fk FOREIGN KEY (space_id) REFERENCES public.spaces(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users_spaces users_spaces_users_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: dominikpalatin
--

ALTER TABLE ONLY public.users_spaces
    ADD CONSTRAINT users_spaces_users_id_fk FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

