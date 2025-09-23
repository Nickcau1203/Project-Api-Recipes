"use client";

import { useState, useEffect, use } from "react";
import { Spin, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";

import UserHeader from "@/components/UserHeader";
import UserDetails from "@/components/UserDetails";
import UserAddressAndCompany from "@/components/UserAddressAndCompany";

export default function UserDetailsPage({ params }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const resolvedParams = use(params);

    const fetchUser = async (userId) => {
        try {
            const response = await axios.get(`https://api.sampleapis.com/recipes/recipes${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error("Erro ao buscar receita", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (resolvedParams?.id) {
            fetchUser(resolvedParams.id);
        }
    }, [resolvedParams?.id]);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes da receita...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className={styles.container}>
                <div className={styles.errorWrapper}>
                    <h3>Receita não encontrada</h3>
                    <Link href="/users">
                        <Button type="primary" icon={<ArrowLeftOutlined />}>
                            Voltar para lista
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/users">
                    <Button icon={<ArrowLeftOutlined />} className={styles.backButton}>
                        Voltar
                    </Button>
                </Link>
                <h2 className={styles.title}>Detalhes da Receita</h2>
            </div>

            <div className={styles.contentWrapper}>
                <UserHeader user={user} />
                <UserDetails user={user} />
                <UserAddressAndCompany user={user} />
            </div>
        </div>
    );
}